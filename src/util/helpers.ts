import matter from 'gray-matter';

export const parseEntry = (slug, fileContents) => {
  let entry: any = matter(fileContents);
  entry.data.date = entry.data.date + '';
  entry = { content: entry.content, ...entry.data, slug: slug.split('.')[0] };
  return entry;
};

export const reformatDate = (fullDate: any) => {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
};
