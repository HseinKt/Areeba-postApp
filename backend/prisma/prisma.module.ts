import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // allows injecting Prisma anywhere (It makes the module available everywhere automatically.)
@Module({
  // This decorator defines a Nest module.
  providers: [PrismaService], // This tells Nest: Create and manage an instance of PrismaService
  exports: [PrismaService], // This tells Nest: Other modules are allowed to use PrismaService.
})
export class PrismaModule {} //This is just the module container class, It doesn’t need logic. It exists so Nest can register it.

// It accepts metadata:
// @Module({
//   providers: [],
//   controllers: [],
//   imports: [],
//   exports: [],
// })

// This tells Nest how to build the DI container.
