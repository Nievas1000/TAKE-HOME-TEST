import { Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {

  constructor(private readonly commitsService: CommitsService) {}
    
  @Get()
  getCommits() {
    return this.commitsService.getCommits();
  }
  
}
