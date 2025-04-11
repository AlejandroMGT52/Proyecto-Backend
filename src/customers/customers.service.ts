import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customer/customer.interface';
@Injectable()
export class CustomersService  { 
    private custmon: Customer[] = [
    {
        id: 1,
        name: 'David Maldonado',
        age: 21,
        birthday: new Date('2003/05/15'),
      },
      {
        id: 2,
        name: 'Sofia Salguero',
        age: 20,
        birthday: new Date('2005/02/22'),
      },];
      
 getCust():Customer [] {
  return this.custmon;
 }
            
getId(id: number): Customer | undefined {
 return this.custmon.find( (item: Customer) => item.id == id);
 }
 update(id: number, body: any) {
           let CUSTOMER: Customer = {
             id,
             name: body.name,
             birthday: body.birthday,
             age: body.age
           }
           this.custmon = this.custmon.map( (item: Customer) => {
             console.log(item, id, item.id == id);
             return item.id == id ? CUSTOMER : item;
           });
         }
         delete(id: number) {
                   this.custmon = this.custmon.filter( (item: Customer) => item.id != id );
                 }
                 private lastId(): number {
                    return this.custmon[this.custmon.length - 1].id;
                  }
    
}
