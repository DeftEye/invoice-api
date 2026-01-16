export class CreateInvoiceDto {
  invoiceNumber: string;
  clientName: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid' | 'overdue';
  description?: string;
}
