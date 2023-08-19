import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { firstName, secondName, company, country, phone, service } = await req.json();
    console.log({ firstName, secondName, company, country, phone, service });
    return NextResponse.json({ message: "Ok" })
}