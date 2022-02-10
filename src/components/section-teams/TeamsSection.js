import React from 'react';
import { useState } from 'react/cjs/react.development';
import photoFrame from '../../assets/images/teams/photo-frame.png';
import { TEAM_MEMBERS } from '../../constants/team-members';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import PhotoFrame from './PhotoFrame';
import TeamMember from './TeamMember';
import TeamMemberSmall from './TeamMemberSmall';

const TeamsSection = () => {
  const [selectedMember, seSelectedMember] = useState(TEAM_MEMBERS[0]);
  return (
    <FlexContainer className="column" style={{ padding: '0 50px', marginTop: 150 }} mobileStyle={{ padding: '0 20px', marginTop: 100 }}>
      <Label fontFamily="syncopate" size="huge">
        Team
      </Label>
      <TeamMember selectedMember={selectedMember} />

      <FlexContainer style={{ marginTop: 140 }}>
        {TEAM_MEMBERS.map((member, i) => (
          <TeamMemberSmall key={i} member={member} />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};

export default TeamsSection;