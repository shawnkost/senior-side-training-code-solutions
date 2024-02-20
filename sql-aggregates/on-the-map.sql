select "co"."name" as "countryName",
       count(*) as "totalCities"
  from "countries" as "co"
  join "cities" as "ci" using ("countryId")
 group by "co"."countryId"
