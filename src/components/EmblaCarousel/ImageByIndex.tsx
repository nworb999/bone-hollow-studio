import { splitBathroom as image1 } from '../../images'
import { splitKitchen as image2 } from '../../images'
import { splitLivingRoom as image3 } from '../../images'
import { splitRock as image4 } from '../../images'
import { Image } from '../../types'

export const images: Image[] = [{ image: image1, altText: '' }, { image: image2, altText: '' }, { image: image3, altText: '' }, { image: image4, altText: '' }]

const imageByIndex = (index: number): Image => images[index % images.length]

export default imageByIndex
