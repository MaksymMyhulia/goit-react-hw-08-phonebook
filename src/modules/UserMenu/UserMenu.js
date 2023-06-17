import { Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
    const { user } = useAuth();
    return (
      <Wrapper>
        <p>Welcome, {user.name}</p>
      </Wrapper>
    );
  };