import { Controller, Get } from '@nestjs/common';
import { ElasticsearchService } from '../../Domain/Services/elastic.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Elasticsearch')
@Controller()
export class ElasticsearchController {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

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
