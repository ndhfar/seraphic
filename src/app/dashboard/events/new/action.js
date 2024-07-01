'use server';

import { prisma } from '@/utils/prisma';

export async function createEventAction(_, formData) {
  const title = formData.get('title');
  const location = formData.get('location');
  const description = formData.get('description');

  if (!title || !location || !description) {
    return {
      success: false,
      message: 'Please fill all the fields',
    };
  }

  await prisma.event.create({
    data: {
      title,
      location,
      description,
      authorId: payload.id,
    },
  });

  return {
    success: true,
    message: 'Event created',
  };
}
