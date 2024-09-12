import { NextResponse } from 'next/server'

const mongoDbConnect = require('@/libs/mongodb')
const CrudModel = require('@/models/crudModel')

export async function PUT(req, {params}) {
    const { id } = params
    const { newTitle: title, newDescription: description } = await req.json()
    await mongoDbConnect()

    if(!title && !description){
        return NextResponse.json({message: 'Enter thus filed'}, {status: 401})
    }
    const UpdateTopic = await CrudModel.findByIdAndUpdate(id, {title, description})
    if(!UpdateTopic){
        return NextResponse.json({message: 'Failed to update thus new topic'}, {status: 500})
    }
    return NextResponse.json({message: 'New Topic Updated'}, {status: 200})
}

export async function GET(req, {params}) {
    const { id } = params
    console.log(id);
    
    await mongoDbConnect()
    const getSpecificData = await CrudModel.findById({_id: id})
    if(!getSpecificData){
        return NextResponse.json({message: 'No data found'}, {status: 401} )
    }
    return NextResponse.json({message: 'Data', topics: getSpecificData}, {status: 200} )
}


