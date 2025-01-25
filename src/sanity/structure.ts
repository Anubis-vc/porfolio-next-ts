import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
      S.documentTypeListItem('pageInfo').title('Page Info'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('social').title('Socials'),
    ])