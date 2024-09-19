import type { Schema, Attribute } from '@strapi/strapi';

export interface PostPost extends Schema.Component {
  collectionName: 'components_post_posts';
  info: {
    displayName: 'Post';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    duration: Attribute.Integer;
    brand: Attribute.Relation<'post.post', 'oneToOne', 'api::brand.brand'>;
    playsCount: Attribute.Integer & Attribute.DefaultTo<0>;
    playsTime: Attribute.Integer & Attribute.DefaultTo<0>;
    fullPlaysCount: Attribute.Integer & Attribute.DefaultTo<0>;
    isVideo: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PostPlaylist extends Schema.Component {
  collectionName: 'components_post_playlists';
  info: {
    displayName: 'Playlist';
    icon: 'check';
  };
  attributes: {
    post: Attribute.Component<'post.post', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'post.post': PostPost;
      'post.playlist': PostPlaylist;
    }
  }
}
