import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {
  private invoices: Invoice[] = [];
  private idCounter = 1;

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
