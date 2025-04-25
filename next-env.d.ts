/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare module 'mongoose' {
  import mongoose from 'mongoose';
  export * from 'mongoose';
  export default mongoose;
}

declare module 'bcryptjs' {
  export function genSalt(rounds?: number): Promise<string>;
  export function hash(str: string, salt: string): Promise<string>;
  export function compare(str: string, hash: string): Promise<boolean>;
}

declare global {
  var process: {
    env: {
      MONGODB_URI: string;
      [key: string]: string;
    }
  }
  var mongoose: {
    conn: any;
    promise: any;
  }
} 