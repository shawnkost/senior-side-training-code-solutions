select "title", count("filmId") as "totalDvds"
  from "films"
  join "inventory" using ("filmId")
  group by "title"
  order by "totalDvds" desc;
