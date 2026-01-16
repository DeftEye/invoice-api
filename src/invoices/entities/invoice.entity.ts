import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Invoice {
  @ApiProperty({
    description: 'Unique identifier',
    example: '1',
  })
  id: string;

  @ApiProperty({
    description: 'Unique invoice number',
    example: 'INV-001',
  })
  invoiceNumber: string;

  @ApiProperty({
    description: 'Name of the client',
    example: 'Acme Corp',
  })
  clientName: string;

  @ApiProperty({
    description: 'Invoice amount in dollars',
    example: 1500.5,
  })
  amount: number;

  @ApiProperty({
    description: 'Invoice date in ISO format',
    example: '2026-01-15',
  })
  date: string;

  @ApiProperty({
    description: 'Payment status of the invoice',
    enum: ['pending', 'paid', 'overdue'],
    example: 'pending',
  })
  status: 'pending' | 'paid' | 'overdue';

  @ApiPropertyOptional({
    description: 'Additional notes or description',
    example: 'Web development services',
  })
  description?: string;
}
