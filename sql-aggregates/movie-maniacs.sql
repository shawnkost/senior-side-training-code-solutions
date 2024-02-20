select "firstName",
       "lastName",
       sum("amount") as "totalSpent"
  from "customers"
  join "payments" using ("customerId")
  group by "customerId"
  order by "totalSpent" desc
