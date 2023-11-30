import { List, ListLink } from './LinksList.styled';
import { linksList } from '../../constants/linksList';

export default function LinksList() {
    
  return (
    <List>
      {linksList.map((link) => (
        <li key={link.title}>
          <ListLink to={link.path}>{link.title}</ListLink>
        </li>
      ))}
    </List>
  );
}
