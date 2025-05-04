'use client'
import Recommend from '@/app/(main)/phim/[slug]/_components/content-tabs/recommend'
import Episodes from './episodes'
import Gallery from './gallery'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Episode, Movie } from '@/types/movie'

interface ContentTabsProps {
  episodes: Episode[]
  trailerURL: string
  movies: Movie[]
}

const ContentTabs = ({
  episodes = [],
  trailerURL,
  movies = []
}: ContentTabsProps) => {
  return (
    <Tabs defaultValue='episode' className='content-tabs'>
      <TabsList className='w-full min-[1120px]:w-auto bg-transparent text-white text-sm font-medium'>
        <TabsTrigger
          value='episode'
          className='px-5 data-[state=active]:bg-transparent border-b border-transparent rounded-none data-[state=active]:text-primaryCustom data-[state=active]:border-b data-[state=active]:border-primaryCustom transition-all duration-300'
        >
          Tập phim
        </TabsTrigger>
        <TabsTrigger
          value='gallery'
          className='px-5 data-[state=active]:bg-transparent border-b border-transparent rounded-none data-[state=active]:text-primaryCustom data-[state=active]:border-b data-[state=active]:border-primaryCustom transition-all duration-300'
        >
          Gallery
        </TabsTrigger>
        <TabsTrigger
          className='px-5 data-[state=active]:bg-transparent border-b border-transparent rounded-none data-[state=active]:text-primaryCustom data-[state=active]:border-b data-[state=active]:border-primaryCustom transition-all duration-300'
          value='recommend'
        >
          Đề xuất
        </TabsTrigger>
      </TabsList>

      <TabsContent value='episode'>
        <Episodes episodes={episodes} />
      </TabsContent>
      <TabsContent value='gallery'>
        <Gallery trailerURL={trailerURL} />
      </TabsContent>
      <TabsContent value='recommend'>
        <Recommend movies={movies} />
      </TabsContent>
    </Tabs>
  )
}

export default ContentTabs
