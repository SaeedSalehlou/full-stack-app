import { Controller } from '@nestjs/common';
import { ServerFeatureTodoService } from './server-feature-todo.service';

@Controller('server-feature-todo')
export class ServerFeatureTodoController {
  constructor(private serverFeatureTodoService: ServerFeatureTodoService) {}
}
