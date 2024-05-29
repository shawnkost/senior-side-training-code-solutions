select "firstName",
       "lastName",
       sum("amount") as "totalAmount"
  from "customers"
  join "rentals" using ("customerId")
  join "payments" using ("rentalId")
  group by "firstName", "lastName"
  order by "totalAmount" desc;
