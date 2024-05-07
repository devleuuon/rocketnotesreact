import { RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

export function Header() {
    const { signOut } = useAuth()

    return (
        <Container>
            <Profile to='/rocketnotesreact/profile'>
                <img src="https://github.com/devleuuon.png" alt="imagem de lennon"/>

                <div>
                    <span>Bem-Vindo,</span>
                    <strong>Lennon Fonseca</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}