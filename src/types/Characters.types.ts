export interface Characters {
  url: string,
  name: string,
  gender: string,
  culture: string,
  born: string,
  died: string,
  titles: string[]
  aliases: string[],
  father: string,
  mother: string,
  spouse: string,
  allegiances: string[],
  books: string[],
  povBooks: string[],
  tvSeries: string[],
  playedBy: string[],
}

export interface ExtendedCharacters {
  data: Characters[],
  lastPage: number
}

export interface SelectCharacters {
  name: string,
  params_name: string,
  options: string[] | number[]
}