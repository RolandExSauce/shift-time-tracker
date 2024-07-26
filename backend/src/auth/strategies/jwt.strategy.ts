//src/auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/api/user/user.service';
import { jwtSecret } from '../auth.module';
// import { jwtSecret } from './auth.module';
// import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
    });
  }

  //validate a user
  async validate(payload: { userId: number }) {
    const user = await this.userService.user(String(payload.userId)); //TODO: get the correct type for userId
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
