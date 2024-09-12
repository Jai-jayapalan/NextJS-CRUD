import { NextResponse } from 'next/server'

const mongoDbConnect = require('@/libs/mongodb')
const CrudModel = require('@/models/crudModel')

export async function POST(req) {
    const { title, description } = await req.json()
    await mongoDbConnect()

    if(!title && !description){
        return NextResponse.json({message: 'Enter thus filed'}, {status: 401})
    }
    const CreateTopic = await CrudModel.create({title, description})
    if(!CreateTopic){
        return NextResponse.json({message: 'Failed to create new topic'}, {status: 500})
    }
    return NextResponse.json({message: 'New Topic Created'}, {status: 200})
}

export async function GET() {
    await mongoDbConnect()
    const getAllData = await CrudModel.find()
    if(!getAllData){
        return NextResponse.json({message: 'No data found'}, {status: 401} )
    }
    return NextResponse.json({message: 'Data', topics: getAllData}, {status: 200} )
}

export async function DELETE(req) {
    const id = await req.nextUrl.searchParams.get('id')
    await mongoDbConnect()
    const getAllData = await CrudModel.findByIdAndDelete({_id: id})
    if(!getAllData){
        return NextResponse.json({message: 'No data found'}, {status: 401} )
    }
    return NextResponse.json({message: 'Data deleted successfully'}, {status: 200} )
}


