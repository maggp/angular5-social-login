export class SocialUser {
  provider: string;
  id: string;
  email: string;
  name: string;
  image: string;
  token?: string;
  idToken?: string
  last_name?: string;
  first_name?: string;
}

export class LoginProviderClass {
  name: string;
  id: string;
  url: string;
  last_name?: string;
  first_name?: string;
}

export class LinkedInResponse {
  emailAddress: string;
  firstName: string;
  id: string;
  lastName: string;
  pictureUrl: string;
}
