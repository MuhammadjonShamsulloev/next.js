import { NextRequest, NextResponse } from 'next/server';
import scheme from './scheme';

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: 'Milk',
      price: 10,
    },
    {
      id: 2,
      name: 'Potato',
      price: 14,
    },
    {
      id: 3,
      name: 'Carrot',
      price: 11,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatoin = scheme.safeParse(body);

  if (!validatoin.success)
    return NextResponse.json(validatoin.error.errors, { status: 400 });

  return NextResponse.json(
    { id: 10, name: body.name, price: body.price },
    { status: 201 }
  );
}
