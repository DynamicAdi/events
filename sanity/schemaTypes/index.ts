import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
// import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { aboutType } from './aboutType'
import { mainPost } from './mainPostType'
import { servicesType } from './servicesType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, authorType, aboutType, servicesType, mainPost],
}
