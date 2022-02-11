import React from 'react';
import styled from 'styled-components/macro';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import PhotoFrame from './PhotoFrame';

const Container = styled(FlexContainer)`
  transition: opacity 0.5s;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  :hover {
    opacity: 1;
  }
`;

const TeamMemberSmall = ({ DESKTOP_PIXEL, selectedMember, member, color, onClick }) => {
  const [width] = useWindowSize();
  return (
    <a href="/#team">
      <Container DESKTOP_PIXEL={DESKTOP_PIXEL} className="column align-ce pointer" isActive={selectedMember.id === member.id} onClick={onClick}>
        <PhotoFrame photo={member.photo} size={width >= DESKTOP_PIXEL ? 'small' : 'tiny'} />

        <Label color={color} fontFamily="syncopate" size="normal" style={{ marginTop: 8 }}>
          {member.firstname}
        </Label>
        <Label color={color} fontFamily="syncopate" size="normal">
          {member.lastname}
        </Label>
        <Label className="text-center" color="white" size="nano">
          {member.role}
        </Label>
      </Container>
    </a>
  );
};

export default TeamMemberSmall;
