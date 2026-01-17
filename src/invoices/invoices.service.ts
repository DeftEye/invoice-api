import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {
  private invoices: Invoice[] = [];
  private idCounter = 1;

  constructor() {
    this.loadSeedData();
  }

  private loadSeedData(): void {
    this.invoices = [
      {
        id: '1',
        invoiceNumber: 'INV-2025-001',
        clientName: 'Acme Corporation',
        amount: 2500.0,
        date: '2025-07-15',
        status: 'paid',
        description: 'Website redesign and development',
      },
      {
        id: '2',
        invoiceNumber: 'INV-2025-002',
        clientName: 'Tech Solutions Inc',
        amount: 1850.5,
        date: '2025-08-03',
        status: 'paid',
        description: 'Mobile app consultation',
      },
      {
        id: '3',
        invoiceNumber: 'INV-2025-003',
        clientName: 'Global Ventures LLC',
        amount: 5200.0,
        date: '2025-08-20',
        status: 'paid',
      },
      {
        id: '4',
        invoiceNumber: 'INV-2025-004',
        clientName: 'StartUp Dynamics',
        amount: 980.0,
        date: '2025-09-05',
        status: 'overdue',
        description: 'Logo design and branding package',
      },
      {
        id: '5',
        invoiceNumber: 'INV-2025-005',
        clientName: 'Enterprise Systems Corp',
        amount: 7500.0,
        date: '2025-09-12',
        status: 'paid',
        description: 'Database migration services',
      },
      {
        id: '6',
        invoiceNumber: 'INV-2025-006',
        clientName: 'Creative Media Group',
        amount: 1200.0,
        date: '2025-09-18',
        status: 'pending',
        description: 'Video editing and production',
      },
      {
        id: '7',
        invoiceNumber: 'INV-2025-007',
        clientName: 'Digital Marketing Pro',
        amount: 3300.0,
        date: '2025-09-25',
        status: 'paid',
      },
      {
        id: '8',
        invoiceNumber: 'INV-2025-008',
        clientName: 'FinTech Innovations',
        amount: 8900.0,
        date: '2025-10-02',
        status: 'paid',
        description: 'Payment gateway integration',
      },
      {
        id: '9',
        invoiceNumber: 'INV-2025-009',
        clientName: 'CloudFirst Solutions',
        amount: 4200.0,
        date: '2025-10-10',
        status: 'overdue',
        description: 'Cloud infrastructure setup',
      },
      {
        id: '10',
        invoiceNumber: 'INV-2025-010',
        clientName: 'Retail Chain Partners',
        amount: 2100.0,
        date: '2025-10-15',
        status: 'paid',
      },
      {
        id: '11',
        invoiceNumber: 'INV-2025-011',
        clientName: 'Healthcare Systems Inc',
        amount: 6700.0,
        date: '2025-10-22',
        status: 'pending',
        description: 'HIPAA compliance audit',
      },
      {
        id: '12',
        invoiceNumber: 'INV-2025-012',
        clientName: 'Education Platform Co',
        amount: 3450.0,
        date: '2025-10-28',
        status: 'paid',
        description: 'Learning management system development',
      },
      {
        id: '13',
        invoiceNumber: 'INV-2025-013',
        clientName: 'Real Estate Pros',
        amount: 1590.0,
        date: '2025-11-03',
        status: 'paid',
      },
      {
        id: '14',
        invoiceNumber: 'INV-2025-014',
        clientName: 'Food Services Group',
        amount: 2800.0,
        date: '2025-11-08',
        status: 'pending',
        description: 'Online ordering system',
      },
      {
        id: '15',
        invoiceNumber: 'INV-2025-015',
        clientName: 'Travel Agency Network',
        amount: 4100.0,
        date: '2025-11-12',
        status: 'paid',
        description: 'Booking platform integration',
      },
      {
        id: '16',
        invoiceNumber: 'INV-2025-016',
        clientName: 'Manufacturing Solutions',
        amount: 9200.0,
        date: '2025-11-18',
        status: 'overdue',
        description: 'Inventory management system',
      },
      {
        id: '17',
        invoiceNumber: 'INV-2025-017',
        clientName: 'Legal Services LLC',
        amount: 1750.0,
        date: '2025-11-22',
        status: 'paid',
      },
      {
        id: '18',
        invoiceNumber: 'INV-2025-018',
        clientName: 'Sports & Fitness Co',
        amount: 2250.0,
        date: '2025-11-27',
        status: 'paid',
        description: 'Member portal development',
      },
      {
        id: '19',
        invoiceNumber: 'INV-2025-019',
        clientName: 'Fashion Retail Group',
        amount: 3800.0,
        date: '2025-12-01',
        status: 'pending',
        description: 'E-commerce platform customization',
      },
      {
        id: '20',
        invoiceNumber: 'INV-2025-020',
        clientName: 'Automotive Services Inc',
        amount: 5500.0,
        date: '2025-12-05',
        status: 'paid',
      },
      {
        id: '21',
        invoiceNumber: 'INV-2025-021',
        clientName: 'Construction Group Ltd',
        amount: 7800.0,
        date: '2025-12-09',
        status: 'paid',
        description: 'Project management software',
      },
      {
        id: '22',
        invoiceNumber: 'INV-2025-022',
        clientName: 'Consulting Partners',
        amount: 4500.0,
        date: '2025-12-12',
        status: 'pending',
        description: 'Business intelligence dashboard',
      },
      {
        id: '23',
        invoiceNumber: 'INV-2025-023',
        clientName: 'Energy Solutions Corp',
        amount: 6200.0,
        date: '2025-12-16',
        status: 'paid',
      },
      {
        id: '24',
        invoiceNumber: 'INV-2025-024',
        clientName: 'Pharmaceutical Research',
        amount: 8500.0,
        date: '2025-12-20',
        status: 'overdue',
        description: 'Clinical trial data platform',
      },
      {
        id: '25',
        invoiceNumber: 'INV-2025-025',
        clientName: 'Telecommunications Inc',
        amount: 5900.0,
        date: '2025-12-23',
        status: 'paid',
        description: 'Customer service portal',
      },
      {
        id: '26',
        invoiceNumber: 'INV-2026-026',
        clientName: 'Insurance Providers Co',
        amount: 3700.0,
        date: '2026-01-02',
        status: 'pending',
      },
      {
        id: '27',
        invoiceNumber: 'INV-2026-027',
        clientName: 'Media Publishing House',
        amount: 2900.0,
        date: '2026-01-05',
        status: 'paid',
        description: 'Content management system upgrade',
      },
      {
        id: '28',
        invoiceNumber: 'INV-2026-028',
        clientName: 'Logistics Express',
        amount: 4800.0,
        date: '2026-01-08',
        status: 'paid',
        description: 'Fleet tracking system',
      },
      {
        id: '29',
        invoiceNumber: 'INV-2026-029',
        clientName: 'Hotel Chain International',
        amount: 6400.0,
        date: '2026-01-10',
        status: 'pending',
        description: 'Reservation system integration',
      },
      {
        id: '30',
        invoiceNumber: 'INV-2026-030',
        clientName: 'Agriculture Tech Ltd',
        amount: 3200.0,
        date: '2026-01-12',
        status: 'paid',
      },
      {
        id: '31',
        invoiceNumber: 'INV-2026-031',
        clientName: 'Banking Solutions Group',
        amount: 9800.0,
        date: '2026-01-14',
        status: 'paid',
        description: 'Security compliance assessment',
      },
      {
        id: '32',
        invoiceNumber: 'INV-2026-032',
        clientName: 'Entertainment Studios',
        amount: 5100.0,
        date: '2026-01-15',
        status: 'pending',
        description: 'Streaming platform development',
      },
      {
        id: '33',
        invoiceNumber: 'INV-2026-033',
        clientName: 'Aerospace Components',
        amount: 7200.0,
        date: '2026-01-16',
        status: 'paid',
      },
      {
        id: '34',
        invoiceNumber: 'INV-2026-034',
        clientName: 'Nonprofit Foundation',
        amount: 1400.0,
        date: '2026-01-17',
        status: 'pending',
        description: 'Donation platform setup',
      },
      {
        id: '35',
        invoiceNumber: 'INV-2026-035',
        clientName: 'Beauty Products Inc',
        amount: 2600.0,
        date: '2026-01-17',
        status: 'paid',
        description: 'E-commerce site maintenance',
      },
      {
        id: '36',
        invoiceNumber: 'INV-2026-036',
        clientName: 'Pet Care Services',
        amount: 1890.0,
        date: '2026-01-17',
        status: 'pending',
      },
      {
        id: '37',
        invoiceNumber: 'INV-2026-037',
        clientName: 'Gaming Studio Pro',
        amount: 8300.0,
        date: '2026-01-17',
        status: 'paid',
        description: 'Multiplayer server infrastructure',
      },
      {
        id: '38',
        invoiceNumber: 'INV-2026-038',
        clientName: 'Architecture Firm Partners',
        amount: 4700.0,
        date: '2026-01-17',
        status: 'pending',
        description: '3D visualization platform',
      },
      {
        id: '39',
        invoiceNumber: 'INV-2026-039',
        clientName: 'Event Planning Co',
        amount: 3100.0,
        date: '2026-01-17',
        status: 'paid',
      },
      {
        id: '40',
        invoiceNumber: 'INV-2026-040',
        clientName: 'Environmental Services',
        amount: 5600.0,
        date: '2026-01-17',
        status: 'pending',
        description: 'Sustainability tracking dashboard',
      },
    ];
    this.idCounter = 41;
  }

  create(createInvoiceDto: CreateInvoiceDto): Invoice {
    const newInvoice: Invoice = {
      id: (this.idCounter++).toString(),
      ...createInvoiceDto,
    };
    this.invoices.push(newInvoice);
    return newInvoice;
  }

  findAll(): Invoice[] {
    return this.invoices;
  }

  findOne(id: string): Invoice {
    const invoice = this.invoices.find((inv) => inv.id === id);
    if (!invoice) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }
    return invoice;
  }

  update(id: string, updateInvoiceDto: UpdateInvoiceDto): Invoice {
    const invoiceIndex = this.invoices.findIndex((inv) => inv.id === id);
    if (invoiceIndex === -1) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }

    const updatedInvoice = {
      ...this.invoices[invoiceIndex],
      ...updateInvoiceDto,
    };
    this.invoices[invoiceIndex] = updatedInvoice;
    return updatedInvoice;
  }

  remove(id: string): void {
    const invoiceIndex = this.invoices.findIndex((inv) => inv.id === id);
    if (invoiceIndex === -1) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }
    this.invoices.splice(invoiceIndex, 1);
  }
}
