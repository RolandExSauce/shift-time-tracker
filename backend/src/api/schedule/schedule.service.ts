import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SchedulePlan, DaySchedule, Prisma } from '@prisma/client';
import {
  CreateSchedulePlanInput,
  UpdateSchedulePlanInput,
} from './dto/schedule-type-defs';

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  // Get all schedule plans
  async getSchedulePlans(): Promise<SchedulePlan[]> {
    return this.prisma.schedulePlan.findMany({
      include: {
        weekSchedule: true, // Include related DaySchedule entries
      },
    });
  }

  // Find a schedule plan by ID
  async getSchedulePlan(id: string): Promise<SchedulePlan | null> {
    return this.prisma.schedulePlan.findUnique({
      where: { id },
      include: {
        weekSchedule: true, // Include related DaySchedule entries
      },
    });
  }

  // Create a new schedule plan
  async createSchedulePlan(
    data: CreateSchedulePlanInput,
  ): Promise<SchedulePlan> {
    return this.prisma.schedulePlan.create({
      data,
    });
  }

  // Update a schedule plan by ID
  async updateSchedulePlan(
    id: string,
    data: UpdateSchedulePlanInput,
  ): Promise<SchedulePlan> {
    return this.prisma.schedulePlan.update({
      where: { id },
      data,
    });
  }

  // Delete a schedule plan by ID
  async deleteSchedulePlan(id: string): Promise<SchedulePlan> {
    return this.prisma.schedulePlan.delete({
      where: { id },
    });
  }

  // Get all day schedules
  async getDaySchedules(): Promise<DaySchedule[]> {
    return this.prisma.daySchedule.findMany();
  }

  // Find a day schedule by ID
  async getDaySchedule(id: string): Promise<DaySchedule | null> {
    return this.prisma.daySchedule.findUnique({
      where: { id },
    });
  }

  // Create a new day schedule
  async createDaySchedule(
    data: Prisma.DayScheduleCreateInput,
  ): Promise<DaySchedule> {
    return this.prisma.daySchedule.create({
      data,
    });
  }

  // Update a day schedule by ID
  async updateDaySchedule(
    id: string,
    data: Prisma.DayScheduleUpdateInput,
  ): Promise<DaySchedule> {
    return this.prisma.daySchedule.update({
      where: { id },
      data,
    });
  }

  // Delete a day schedule by ID
  async deleteDaySchedule(id: string): Promise<DaySchedule> {
    return this.prisma.daySchedule.delete({
      where: { id },
    });
  }
}
