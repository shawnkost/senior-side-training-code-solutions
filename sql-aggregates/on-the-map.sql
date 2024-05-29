select "countries"."name" as "countryName",
       count("cityId") as "totalCities"
  from "countries"
  join "cities" using ("countryId")
  group by "countryName"
