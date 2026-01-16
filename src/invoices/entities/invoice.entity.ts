export class Invoice {
  id: string;
  invoiceNumber: string;
  clientName: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid' | 'overdue';
  description?: string;
}
