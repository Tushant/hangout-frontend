import React from 'react';
import * as styled from './styled';
import Avatar from './images/tushant.jpg'


class Profile extends React.Component {
  render() {
    return (
      <styled.Profile>
        <styled.ProfileWrapper>
          <styled.ProfileImage>
            <styled.Caption>Your profile</styled.Caption>
            <styled.Avatar src={Avatar} />
            <styled.Username>Tushant Khatiwada</styled.Username>
            <styled.Upload>Upload New Avatar</styled.Upload>
            <styled.Slogan>
              <styled.SloganTitle>Your Slogan</styled.SloganTitle>
              <styled.SloganText>
                All of us has something special that makes us as beautiful as flower.
                The bottomline is to find that speciality within us.
              </styled.SloganText>
            </styled.Slogan>
          </styled.ProfileImage>
          <styled.ProfilePersonal>
            <styled.Caption>Edit your personal settings</styled.Caption>
            <styled.Form>
              <styled.FormField>
                <styled.Label>Full Name</styled.Label>
                <input type="text" className="form-input" placeholder="Full Name" required />
              </styled.FormField>

              <styled.FormField>
                <styled.Label>Email</styled.Label>
                <input type="text" className="form-input" placeholder="Email" required />
              </styled.FormField>

              <styled.FormField>
                <styled.Label>Password</styled.Label>
                <input type="password" className="form-input" placeholder="password" required />
              </styled.FormField>

              <styled.FormField>
                <styled.Label>Country</styled.Label>
                <input type="text" className="form-input" placeholder="Country" required />
              </styled.FormField>
            </styled.Form>
          </styled.ProfilePersonal>
          <styled.ProfileExternal>
            <styled.Caption>Your external links</styled.Caption>
            <styled.Form>
              <styled.FormField>
                <styled.Label>Full Name</styled.Label>
                <input type="text" className="form-input" placeholder="Full Name" required />
              </styled.FormField>

              <styled.FormField>
                <styled.Label>Email</styled.Label>
                <input type="text" className="form-input" placeholder="Email" required />
              </styled.FormField>

              <styled.FormField>
                <styled.Label>Password</styled.Label>
                <input type="password" className="form-input" placeholder="password" required />
              </styled.FormField>

              <styled.FormField>
                <styled.Label>Country</styled.Label>
                <input type="text" className="form-input" placeholder="Country" required />
              </styled.FormField>
            </styled.Form>
          </styled.ProfileExternal>
        </styled.ProfileWrapper>
      </styled.Profile>
    )
  }
}

export default Profile;
