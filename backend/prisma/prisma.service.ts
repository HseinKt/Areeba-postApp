import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable() // This class can be injected into other classes
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // Integrates Prisma with Nest lifecycle
  async onModuleInit() {
    // Ensures DB connects on app start
    await (this.$connect as () => Promise<void>)();
  }

  async onModuleDestroy() {
    // Ensures DB disconnects on app shutdown
    await (this.$disconnect as () => Promise<void>)();
  }
}
