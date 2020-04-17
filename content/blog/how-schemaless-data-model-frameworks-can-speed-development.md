---
title: How Schemaless Data Model Frameworks Can Speed Development
date: 2020-04-17T02:10:00.452Z
---
Early in 2018 I discovered [PushType CMS](https://github.com/pushtype/push_type), which is built on top of Rails. One of its core features is the ability to specify database fields from your model class, doing away with having to keep track of migrations, schemas, and learning a new migration DSL. I feel that it has sped up my app development, and is similar to how the data modeling framework at my previous employer,[Dari](http://docs.brightspot.com/dari/data-modeling/index.html), works.

What is the disadvantage to using schemas and migrations? Mainly, it's that**experimenting is more costly and time-consuming,**and therefore**slows down development**. Below I've outlined the usual process with migrations and schemas:

1) Create a migration by running a generator to create the boilerplate migration file.

2) Open up the migration file, and define the changes using a DSL. *In some cases, it may not be known how to automatically reverse the migration, so you may need to explicitly write how to reverse it yourself.

3) Run the migration

4) Verify. Did you make a mistake? Rollback, fix the mistake, then migrate again.

This all means you need to:

1) Learn about the generators used to create, run and rollback the migrations. The generators have naming conventions that you need to learn as well.

2) Learn the API of the DSL that backs your migration library

3) Spend extra minutes running the generators, migrating, defining your migration, switching files and in general dealing with the overhead that's involved. You may think it’s not that slow, but every rake db:migrate may take several seconds because ActiveRecord loads all the migration files at once. Just take a look at the popularity of this gem:<https://github.com/jalkoby/squasher>. It’s a solution that treats the symptoms, but not the real problem.



Let's take a look at the process of changing a product description field from a simple string input to a text input, first with Active Record, then with a data modeling framework like PushType, to see how they compare.

#### **With Active Record or a similar ORM:**

```

```



Open the file*db/migrate/YYYYMMDDHHMMSS_change_description_field.rb*.

Because the*change_column*command is irreversible, you'll need to add separate "up" and "down" methods:

```

```



then:

```

```



#### **With PushType or similar schemaless data modeling framework:**



Change the following field definition:

```

```



to this:

```

```



That's it! A one-line change to the data model class. No generators, DSL, or migration files.



This post would be remiss, however, to omit the cons to schemaless data model frameworks:

* I haven't yet found a ruby/rails library that has a programmatic interface to postgres'[JSON functions and operators](https://www.postgresql.org/docs/9.4/functions-json.html), and the syntax can take a little bit to get used to. For e.g., querying for containment:

  ```

  ```

  or querying for existence:

  ```

  ```

  took longer than expected from a dev perspective and the quotes syntax wasn't crystal clear.
* On larger teams where the product requirements are more defined, using an ORM like ActiveRecord with migrations and a schema can provide you a greater level of stability. You can see clearly the evolution and history of the schema, and have easily have different database versions if you are supporting multiple versions of an application.

That said, I've been using PushType on[Strengthify](https://www.strengthify.com/)and have really liked it so far. I've also developed some improvements to the PushType CMS over on a[fork](https://github.com/kwyoung11/push_type), which I hope to contribute back to the main repo eventually.