import express from 'express';

declare global{
    namespace Express{
        interface Request{
            id: string;
            nome: string;
            email: string;
        }
    }
}


