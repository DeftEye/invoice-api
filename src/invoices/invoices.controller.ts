import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@ApiTags('invoices')
@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new invoice' })
  @ApiBody({ type: CreateInvoiceDto })
  @ApiResponse({
    status: 201,
    description: 'Invoice successfully created',
    type: Invoice,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  create(@Body() createInvoiceDto: CreateInvoiceDto): Invoice {
    return this.invoicesService.create(createInvoiceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all invoices' })
  @ApiResponse({
    status: 200,
    description: 'List of all invoices',
    type: [Invoice],
  })
  findAll(): Invoice[] {
    return this.invoicesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an invoice by ID' })
  @ApiParam({ name: 'id', description: 'Invoice ID', example: '1' })
  @ApiResponse({
    status: 200,
    description: 'Invoice found',
    type: Invoice,
  })
  @ApiResponse({ status: 404, description: 'Invoice not found' })
  findOne(@Param('id') id: string): Invoice {
    return this.invoicesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an invoice' })
  @ApiParam({ name: 'id', description: 'Invoice ID', example: '1' })
  @ApiBody({ type: UpdateInvoiceDto })
  @ApiResponse({
    status: 200,
    description: 'Invoice successfully updated',
    type: Invoice,
  })
  @ApiResponse({ status: 404, description: 'Invoice not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  update(
    @Param('id') id: string,
    @Body() updateInvoiceDto: UpdateInvoiceDto,
  ): Invoice {
    return this.invoicesService.update(id, updateInvoiceDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete an invoice' })
  @ApiParam({ name: 'id', description: 'Invoice ID', example: '1' })
  @ApiResponse({ status: 204, description: 'Invoice successfully deleted' })
  @ApiResponse({ status: 404, description: 'Invoice not found' })
  remove(@Param('id') id: string): void {
    return this.invoicesService.remove(id);
  }
}
