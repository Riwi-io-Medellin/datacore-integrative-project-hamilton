'use strict';

const { pool } = require('../config/postgres');

const CampusRepository = {
    async findAll() {
        const { rows } = await pool.query('SELECT * FROM campuses ORDER BY name');
        return rows;
    },

    async findById(id) {
        const { rows } = await pool.query('SELECT * FROM campuses WHERE id = $1', [id]);
        return rows[0] || null;
    },

    /** Global dashboard totals across all campuses */
    async globalStats() {
        const sql = `
            SELECT
                COUNT(*)                                          AS total,
                COUNT(*) FILTER (WHERE c.status = 'active')      AS active,
                COUNT(*) FILTER (WHERE c.status = 'withdrawn')   AS withdrawn,
                COUNT(*) FILTER (WHERE c.status = 'completed')   AS completed
            FROM couders c
        `;
        const { rows } = await pool.query(sql);
        return rows[0];
    },
};

module.exports = CampusRepository;
