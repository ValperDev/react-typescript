export interface Props {
    elements: Array<{
      name: string,
      age: number
    }>,
    children?: ReactNode
  }