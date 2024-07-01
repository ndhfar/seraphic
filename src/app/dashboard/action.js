'use server';

import { cookies } from 'next/headers';

export async function logoutAction() {
  cookies();
  return {
    success: true,
  };
}
