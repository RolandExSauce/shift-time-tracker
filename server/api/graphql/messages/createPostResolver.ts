import { prisma } from "../../database/prisma/db-client";



// export const createPost = async (_parent : any, args : any) => {
//     const post = await prisma.post.create({
//         data: {
//             title: args.title,
//             username: args.username
//         }
//     });

//     return post;
// }