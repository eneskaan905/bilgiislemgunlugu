import {getCollection} from 'astro:content';
export async function GET(){const posts=await getCollection('posts',({data})=>!data.draft);return new Response(JSON.stringify(posts.map(p=>({title:p.data.title,url:'/yazilar/'+p.id+'/',category:p.data.category,description:p.data.description+' '+p.data.tags.join(' ')}))),{headers:{'Content-Type':'application/json; charset=utf-8'}})}
