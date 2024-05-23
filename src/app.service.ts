import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  hello(): string {
    return 'Hello World!';
  }

  greeting(name: string): string {
    return `Hello ${name}!`;
  }
}
