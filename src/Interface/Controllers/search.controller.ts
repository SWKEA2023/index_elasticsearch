import { Controller, Get } from '@nestjs/common';
import { SearchService } from '../../Domain/Services/search.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Elasticsearch')
@Controller()
export class ElasticsearchController {
  constructor(private readonly elasticsearchService: SearchService) {}

  @Get()
  @ApiOperation({ summary: 'Search for a item' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: 'give it a type!',
  })
  async getHello() {
    return this.elasticsearchService.getSearch();
  }
}
