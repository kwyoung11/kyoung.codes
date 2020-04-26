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

export const assetPath = (path) => {
  if (!path) {
    return undefined;
  }
  return path.replace('/src/assets/images', '');
};

export const getStaticPathsHelper = (directory, path, fs) => {
  const routes = [];
  const dir = path.join(process.cwd(), directory);
  const dirEntries = fs.readdirSync(dir);
  dirEntries.forEach((filename) => {
    const filenameWithoutExt = filename.slice(0, filename.length - 3);
    routes.push({ params: { slug: filenameWithoutExt } });
  });

  return {
    paths: routes,
    fallback: false,
  };
};