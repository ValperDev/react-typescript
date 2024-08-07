import { Props } from '../types/user';

const List: React.FunctionComponent<Props> = ({elements, children}) => {
  return (
    <div>
      {elements.map(element => (
        <li>
          <span>{element.name}</span>
          <span>{element.age}</span>
        </li>
      ))}
      {children}
    </div>
  )
}

export default List;