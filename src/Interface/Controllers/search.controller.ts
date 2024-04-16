import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from '../../Domain/Services/search.service';

@Controller()
export class ElasticsearchController {
  constructor(private readonly elasticsearchService: SearchService) {}

  @Get(':q')
  async getHello(@Param('q') q: string) {
    return this.elasticsearchService.search(q);
  }
}
