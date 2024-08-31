type TagName = keyof HTMLElementTagNameMap

type Attributes<T extends TagName> = Partial<HTMLElementTagNameMap[T]> & {
  [key: string]: any
}

interface IDOM {
  $query: (selector: string) => Element | null
  $queryAll: (selector: string) => NodeListOf<Element>
  $id: (id: string) => HTMLElement | null
  $clsName: (cls: string) => HTMLCollectionOf<Element>
  $byName: (name: string) => void
  $byTagName: (tagName: string) => void

  $create: <T extends TagName>(
    tag: T,
    attrs?: Attributes<T>
  ) => HTMLElementTagNameMap[T]

  $append: (children: Element, father: Element | HTMLElement) => void
  $remove: (el: Element) => void
  $aEL: (el: Element, typeEvent: string, callbackfn: () => void) => void
}

/**
 * DOM
 * @construct DOM
 * constructor function to use the document functionalities
 * @implements {IDOM}
 * @example
 * ```js
 *  // import constructor function
 *  import DOM from './dom.ts' // or import { DOM } from './DOM.ts'
 *  // we instantiate the function
 *  const D = new DOM()
 *
 *  // this Reference document.getElemtByID()
 *  D.id('<id>')
 * ```
*/
class DOM implements IDOM {
  $query: (selector: string) => Element | null
  $queryAll: (selector: string) => NodeListOf<Element>
  $id: (id: string) => HTMLElement | null
  $clsName: (cls: string) => HTMLCollectionOf<Element>
  $byName: (name: string) => void
  $byTagName: (tagName: string) => void

  $create: <T extends TagName>(
    tag: T,
    attrs?: Attributes<T>
  ) => HTMLElementTagNameMap[T]

  $append: (children: Element, father: Element | HTMLElement) => void
  $remove: (el: Element) => void
  $aEL: (el: Element, typeEvent: string, callbackfn: () => void) => void

  constructor() {
    this.$query = selector => document.querySelector(selector)
    this.$queryAll = selector => document.querySelectorAll(selector)
    this.$id = id => document.getElementById(id)
    this.$clsName = cls => document.getElementsByClassName(cls)
    this.$byName = name => document.getElementsByName(name)
    this.$byTagName = tagName => document.getElementsByTagName(tagName)
    this.$create = (tag, attrs) => Object.assign(document.createElement(tag), attrs)
    this.$append = (children, father = document.body) => children instanceof Array ? children.map(ch => father.appendChild(ch)) : father.appendChild(children)
    this.$remove = element => element.remove()
    this.$aEL = (element, typeEvent, callbackfn) => element.addEventListener(typeEvent, callbackfn)
  }
}

export default DOM
export { DOM }
