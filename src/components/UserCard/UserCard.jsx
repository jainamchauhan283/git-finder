import {
  Container,
  CardLeft,
  Image,
  Title,
  SocialMediaContainer,
  DivFlex,
  DivRow,
  Subtitle,
  CardRight,
  BlogLink,
  Card,
  Button,
  DescriptionContainer,
} from "./_Styled";
import { FaCity, FaMap, FaTwitter, FaLink } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { useContext } from "react";
import { ProfileContext } from "../../context/profileContext";
import Spinner from "../Loading/Spinner";
import { Link } from 'react-router-dom';

const UserCard = () => {
  const { user, isFetching, isInitialLoading } = useContext(ProfileContext);

  // Social Media Links
  const SOCIAL_MEDIA = [
    {
      icon: <FaMap />,
      text: `${user.location}`,
      key: 1,
    },
    {
      icon: <FaCity />,
      text: `${user.company}`,
      key: 2,
    },
    {
      icon: <FaTwitter />,
      text: `${user.twitter_username}`,
      key: 3,
    },
  ];

  // Followers Cards
  const PROFILE_FOLLOWS = [
    {
      title: "Followers",
      text: `${user.followers}`,
      key: 1,
    },
    {
      title: "Following",
      text: `${user.following}`,
      key: 2,
    },
    {
      title: "Repositories",
      text: `${user.public_repos}`,
      key: 3,
    },
  ];

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    <>
      {isFetching || isInitialLoading ? (
        <Spinner />
      ) : (
        <Container
          style={
            isEmpty(user) ? { position: "absolute", visibility: "hidden" } : {}
          }
        >
          <CardLeft>
            <Link to={user.html_url} target="_blank" rel="noopener noreferrer">
              <Image src={user.avatar_url} alt={`Avatar of ${user.name}`} />
            </Link>

            <div>
              <Title>{user.name}</Title>
              <Subtitle>@{user.login}</Subtitle>
            </div>

            <DivFlex>
              {SOCIAL_MEDIA.map((media) => (
                <SocialMediaContainer key={media.key}>
                  <div>{media.icon}</div>
                  <span>
                    {media.text === "null" ? "No Available" : `${media.text}`}
                  </span>
                </SocialMediaContainer>
              ))}
            </DivFlex>
          </CardLeft>

          <CardRight>
            <DescriptionContainer>
              <Title>Description</Title>
              <Link to={user.html_url} target="_blank" rel="noopener noreferrer">
                <RxGithubLogo />
              </Link>
            </DescriptionContainer>

            <Subtitle>{user.bio}</Subtitle>

            <BlogLink>
              <FaLink />
              <a href={user.blog} target="_blank" rel="noopener noreferrer">
                {user.blog === "" ? "Blog not Available" : `${user.blog}`}
              </a>
            </BlogLink>

            <DivRow>
              {PROFILE_FOLLOWS.map((card) => (
                <Card key={card.key}>
                  <h1>{card.title}</h1>
                  <span>{card.text}</span>
                </Card>
              ))}
            </DivRow>

            <Button to="/repos">View Repositories</Button>
          </CardRight>
        </Container>
      )}
    </>
  );
};

export default UserCard;
