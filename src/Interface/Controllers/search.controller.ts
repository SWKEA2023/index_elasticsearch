import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from '../../Domain/Services/search.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Elasticsearch')
@Controller()
export class ElasticsearchController {
  constructor(private readonly elasticsearchService: SearchService) {}

  @Get(':q')
  @ApiOperation({ summary: 'Search for a item' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: 'give it a type!',
  })
  async getHello(@Param('q') q: string) {
    return this.elasticsearchService.search(q);
  }
}
